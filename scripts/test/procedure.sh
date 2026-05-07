failures=0

echo "Build app"
npm run build
failures=$((failures + $?))

echo "Run app in localhost:3000 (do not pipe output)"
npx serve out &
APP_PID=$!
echo "App PID: $APP_PID"

echo "Run synthetics tests"
npm t -w synthetics
failures=$((failures + $?))

echo "Kill app"
kill $APP_PID

if [ $failures -eq 0 ]; then
	echo "All tests passed successfully!"
else
	echo "$failures test(s) failed."
	exit 1
fi
