echo "\nPushing to S3\n"

aws s3 sync dist/ s3://will-the-barber --exclude "*.js"
aws s3 cp --content-encoding gzip ./dist/app.bundle.js s3://will-the-barber/app.bundle.js
