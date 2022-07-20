#script1.sh

echo "Moving new files to public folder";
rm -rfv public && mkdir public
cp -r assets ".\public"
cp consultancy.html ".\public"
cp index.html ".\public"
cp products.html ".\public"
cp contact.html ".\public"
echo "Files Moved Successfully";

echo "Deploying to firebase";

firebase deploy

rm -rfv public