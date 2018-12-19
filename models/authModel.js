var results = {success: false};
// We should do better error checking here to make sure the parameters are present
if (req.body.username == "admin" && req.body.password == "password") {
	req.session.user = req.body.username;
	result = {success: true};
}