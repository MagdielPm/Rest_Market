pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Install dependecies') {
            steps {
                sh "npm install yarn -g" 
		sh "yarn install"
            }
        }
        stage('Build') {
            steps {
                sh "yarn build"
            }
        }
        stage('Test') {
            steps {
                sh "yarn test"
            }
        }
    }
}