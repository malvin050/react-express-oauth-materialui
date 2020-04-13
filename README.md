# running minikube with tekton and local registry
minikube start --vm-driver virtualbox --insecure-registry="host.docker.local:5000"
minikube addons enable ingress

<!-- install Tekton Pipelines and triggers -->
kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
kubectl apply --filename https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml
kubectl get pods --namespace tekton-pipelines --watch


<!-- start local registry -->
docker run -d -p 5000:5000 --name registry-srv -e REGISTRY_STORAGE_DELETE_ENABLED=true registry:2
- Add "insecure-registries": ["host.docker.local:5000"] to docker settings
- Add "[ip adress] host.docker.local" to /etc/hosts
Find ip address using $ ifconfig : en0.inet



<!-- see result execution -->
tkn taskrun describe build-docker-image-from-git-source-task-run
tkn taskrun logs build-docker-image-from-git-source-task-run
tkn pipelinerun logs react-express-oauth-materialui-run-1 -f
tkn pipelinerun describe react-express-oauth-materialui-run-1


to access service:
minikube ip
curl <minikube ip>:<nodeport>

# kube

kubectl port-forward $(kubectl get pod -o=name -l eventlistener=listener) 8080

<!-- create docker secret -->
kubectl create secret docker-registry --dry-run=true [secret_name] \
--docker-server=<DOCKER_REGISTRY_SERVER> \
--docker-username=<DOCKER_USER> \
--docker-password=<DOCKER_PASSWORD> \
--docker-email=<DOCKER_EMAIL> -o yaml > docker-secret.yaml

<!-- create secrets from .env file -->
kubectl create secret generic app-secrets --dry-run=true --from-env-file=./server/.env -o yaml > app-secrets.yaml

kubectl apply --filename [filename]
<!-- see tekton resources -->
kubectl get tekton-pipelines



# Docker

<!-- build docker image -->
docker build -t mdenunez/react-express-oauth-materialui:latest .

<!-- docker run locally with environment files -->
docker run -p 3001:3001 --env-file ./server/.env --env NODE_ENV=production mdenunez/react-express-oauth-materialui:latest

<!-- docker push -->
docker push mdenunez/react-express-oauth-materialui:latest

<!-- docker login -->
docker login -u [username] -p [password]