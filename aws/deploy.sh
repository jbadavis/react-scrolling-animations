rm -r dist
webpack -p
aws s3 sync dist/ s3://will-the-barber

