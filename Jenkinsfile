pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "npm install yarn" 
		sh "yarn install"
		sh "yarn build" 
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