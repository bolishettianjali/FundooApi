
const noteService=require('../service/noteService');
console.log(noteService,"gt");

class NoteController{
    async addNotes(req,res){
        console.log("adding notes");
        await noteService.createNoteService(req.body).then((result)=>{
            res.status(200).json(result)

        }).catch((err=>{
            console.log(err)
            return res.status(400).send(err);
        }))
    }
    async getNotes(req, res) {
        await noteService.getNoteService(req.body).then((result) => {
            res.status(200).json(result)
        }).catch((err => {
            logger.error("Error in get notes")
            return res.status(400).send(err);
        }))
    }
}
module.exports=new NoteController();