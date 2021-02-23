node {

    agent{
        label 'frontend'
        dockerfile {
        dir 'frontend'

        args '-v ${PWD}:/app \
                -v /app/node_modules \
                -p 3000:3000 \
                -e CHOKIDAR_USEPOLLING=true'
    }

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

node{
    agent{
        dockerfile{
            dir 'backend'
        }
    }

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

   