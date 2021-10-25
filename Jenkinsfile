pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                npm install yarn 
		yarn install 
		yarn build 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}