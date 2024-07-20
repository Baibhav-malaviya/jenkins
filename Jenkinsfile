pipeline {
    agent any

    environment {
        NODE_VERSION = '18.1.1'
        MAIL_RECIPIENT = 'baibhav.kr73@gmail.com, baibhav1433.be22@chitkara.edu.in'
    }

    stages {
        stage("checkout") {
            steps {
                checkout scm
           }
        }

        stage("setup") {
            steps {
                sh "nvm install ${NODE_VERSION}"
                sh "nvm use ${NODE_VERSION}"
                sh "npm install"
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