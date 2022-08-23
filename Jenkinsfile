pipeline {
  agent any

  tools {nodejs "18.7.0"}

  stages {

    stage('Cloning git && npm install') {
      steps {
        git url: 'https://github.com/ybeneito/crud-product.git'
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'test'
         sh 'npm run jenkins'
      }
    }
  }
}
