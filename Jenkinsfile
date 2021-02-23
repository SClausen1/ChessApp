pipeline {
    agent none

    node {
        stage('Frontend'){
            agent{
                label 'frontend'
                dockerfile {
                    dir 'frontend'
                    args '-v ${PWD}:/app \
                            -v /app/node_modules \
                            -p 3000:3000 \
                            -e CHOKIDAR_USEPOLLING=true'
                }
            }
            stages{
                stage('Build Fronted') {
                
                    steps {
                        sh 'npm run build'
                    }
                }
                stage('Test Frontend') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('Deploy Frontend') {
                    steps {
                        echo 'Deploying Frontend....'
                    }
                }
            }
        }
    }
    node {
        stage('Backend'){
            agent{
                label 'backend'
                dockerfile{
                    dir 'backend'
                }
            }
            stages{
                stage('Build Backend') {
                
                    steps {
                        echo 'Building Backend..'
                    }
                }
                stage('Test Backend') {
                    steps {
                        echo 'Testing Backend..'
                    }
                }
                stage('Deploy Backend') {
                    steps {
                        echo 'Deploying Backend....'
                    }
                }
            }
        }

    }
}
