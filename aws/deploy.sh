echo "Removing Previous Build\n"

rm -r dist

echo "\nRunning Webpack\n"

webpack -p --progress

echo "\nPushing to S3\n"

aws s3 sync dist/ s3://will-the-barber
