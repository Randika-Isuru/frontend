build:
	docker build -t test-react-app .

create-tag-for-docker-hub:
	docker tag test-react-app randikaisuru89/test-react-app:1.1.1

login-to-docker-hub:
	docker login -u randikaisuru89

push-image-to-docker-hub:
	docker push randikaisuru89/test-react-app

pull-image-from-docker-hub:
	docker pull randikaisuru89/test-react-app

run-image:
	docker run -p 3000:3000 --name test-react-app -d randikaisuru89/test-react-app
