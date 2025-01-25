import multer from "multer"
import path from "path"
import fs from "fs"

const upload = multer({dest: "profiles/"})

const addFeedback = (req, res)=>{

    const {name, profession, message} = req.body

    let imageLink = null;
    if(req.file){
        const filePath = path.join(__dirname, 'profiles', req.file.filename);
        imageLink = `profiles/${req.file.filename}`
    }

    const newTestimonial = {
        name,
        profession,
        image: imageLink,
        date: new Date().toISOString()
    }

    const filePath = path.join(__dirname, 'testinomial.json');
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if (err){
            console.log('Error reading JSON file')
            return res.status(200).json({success: false})
        }

        const testimonials = JSON.parse(data)
        testimonials.push(newTestimonial)

        fs.writeFile(filePath, JSON.stringify(testimonials, null, 2), (writeError)=>{
            if(writeError){
                console.error('Error writing to JSON file:', writeError);
                return res.status(500).send('Error writing to JSON file');
            }
            
            res.status(200).json({message: "Testimonial Submit Successfully", success: true})

        })
    })

}
