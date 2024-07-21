pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.5.1'  // This should match the name in your Jenkins NodeJS installation
    }

    environment {
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
            echo """
                    The pipeline ${currentBuild.fullDisplayName} has succeeded.
                    
                    Build URL: ${env.BUILD_URL}
                    
                    All stages completed successfully.
                    
                    Please check the Jenkins console output for more details.
            """
             
        }
        failure {
            echo "pipeline failed"
            echo """
                    The pipeline ${currentBuild.fullDisplayName} has failed.
                    
                    Build URL: ${env.BUILD_URL}
                    
                    Failed Stage: ${env.FAILED_STAGE}
                    
                    Please check the Jenkins console output for more details.
            """
        }
    }
}