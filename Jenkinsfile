pipeline {
    agent any

    environment {
        NODE_VERSION = 'Node v20.11.1'
        MAIL_RECIPIENT = 'baibhav.kr73@gmail.com, baibhav1433.be22@chitkara.edu.in'
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
                        sh "nvm install ${NODE_VERSION}"
                        sh "nvm use ${NODE_VERSION}"
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