REMOTE_HOST="176.124.193.85"

echo "Check master branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@$REMOTE_HOST:/var/www/$REMOTE_HOST/

echo "Done!"