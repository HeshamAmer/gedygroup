#script1.sh

echo "Moving new files to public folder";
rm -rfv public && mkdir public
mv assets ".\public"
mv consultancy.html ".\public"
mv index.html ".\public"
mv products.html ".\public"
mv contact.html ".\public"
echo "Files Moved Successfully";

echo "Deploying to firebase";

firebase deploy
