pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.5.1'  // This should match the name in your Jenkins NodeJS installation
    }

    environment {
        MAIL_RECIPIENT = 'baibhav.kr73@gmail.com, baibhav1433.be22@chitkara.edu.in'
        MONGODB_URI = 'mongodb+srv://baibhav:Thapar%4098@cluster0.o020bxn.mongodb.net'
    }

    stages {
        stage("checkout") {
            steps {
                script {
                    try {
                        checkout scm
                    } catch (Exception err) {
                        env.FAILED_STAGE = 'checkout'
                        throw err
                    }
                }
            }
        }

        stage("setup") {
            steps {
                script {
                    try {
                        sh 'node --version'  // Verify Node.js version
                        sh "npm install"
                    } catch (Exception err) {
                        env.FAILED_STAGE = 'setup'
                        throw err
                    }
                }
            }
        }

        stage("build") {
            steps {
                script {
                   try {
                        sh "npm run build"
                        sh "mkdir -p build"
                        archiveArtifacts artifacts: 'build/**/*', fingerprint: true
                    } catch (Exception e) {
                        env.FAILED_STAGE = 'build'
                        throw e
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo "pipeline succeeded!"
             mail to: "${MAIL_RECIPIENT}",
                 subject: "Successful pipeline: ${currentBuild.fullDisplayName}",
                 body: """
                    The pipeline ${currentBuild.fullDisplayName} has succeeded.
                    
                    Build URL: ${env.BUILD_URL}
                    
                    All stages completed successfully.
                    
                    Please check the Jenkins console output for more details.
                """
        }
        failure {
            echo "pipeline failed"
            mail to: "${MAIL_RECIPIENT}",
                 subject: "Failed pipeline ${currentBuild.fullDisplayName}",
                 body: """
                    The pipeline ${currentBuild.fullDisplayName} has failed.
                    
                    Build URL: ${env.BUILD_URL}
                    
                    Failed Stage: ${env.FAILED_STAGE}
                    
                    Please check the Jenkins console output for more details.
                """
        }
    }
}