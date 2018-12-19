function login(req, res) {
	authModel.handleLogin(function(error, results) {
		res.json(results);
	});
}

// If a user is currently stored on the session, removes it
function logout(req, res) {
	var result = {success: false};

	// We should do better error checking here to make sure the parameters are present
	if (request.session.user) {
		request.session.destroy();
		result = {success: true};
	}

	response.json(result);
}