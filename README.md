# local

```
npm i
npm run dev
```

# deploy
```
docker build -t imagename .
docker push imagename
docker pull imagename
kubectl apply -t config/
kubectl set image deployment image=imagename
```
