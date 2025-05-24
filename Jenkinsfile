pipeline {
    agent any

    environment {
        IMAGE_NAME = 'node-todo-app'
        CONTAINER_NAME = 'todo-container'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YASHHARMALKAR/To_Do_App_Project.git'
            }
        }

       stage('Build Docker Image') {
        steps {
            script {
                docker.build("node-todo-app", "public")
                    }
            }
        }


        stage('Run Container') {
            steps {
                script {
                    // Stop and remove previous container if exists
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    // Run new container
                    sh "docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
