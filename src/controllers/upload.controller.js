export async function uploadFiles(req, res) {
	try {
		console.log(req.body)
		console.log(req.files)

		const files = req.files

		if (files) {
			let images = []

			files.forEach(file => {
				images.push({image: `/uploads/${file.filename}`})
			})

			console.log(images)

			return res.status(200).send(images)
		}

		res.sendStatus(200)

	} catch(error) {
		console.log(error)
		res.sendStatus(500)
	}
}

export async function uploadFile(req, res) {
	try {
		console.log(req.body)
		console.log(req.file)

		const file = req.file

		if (file) {
			let image = []

			image.push({image: `/uploads/${file.filename}`})

			console.log(image)

			return res.status(200).send(image)
		}

		res.sendStatus(200)
		
	} catch(error) {
		console.log(error)
		res.sendStatus(500)
	}
}