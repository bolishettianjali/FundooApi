
const noteService=require('../service/noteService');
//console.log(noteService,"gt");

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
            console.log("Error in get notes")
            return res.status(400).send(err);
        }))
    }
    async deleteNotes(req,res){
        await noteService.deleteNoteService(req.body)
        .then((result)=>{
            res.status(200).json(result)
        }).catch((err =>{
           return res.status(400).send(err);
        }))
    }
    async isArchievedNotes(req,res){
        await noteService.isArchievedService(req.body)
        .then((result)=>{
            res.status(200).json(result)
        }).catch((err =>{
          return  res.status(400).send(err);
        }))
    }
}
module.exports=new NoteController();