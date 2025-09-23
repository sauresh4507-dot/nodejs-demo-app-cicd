pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sauresh4507-dot/nodejs-demo-app-cicd.git',
                    credentialsId: 'github-creds'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Replace with actual build commands
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Replace with actual test commands
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Replace with actual deployment commands
            }
        }
    }

    post {
        success {
            echo 'Phase 2 Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
