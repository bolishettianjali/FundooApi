const req = require('express/lib/request');
const nodeModel=require('../model/nodemodel')
const notes=nodeModel.notes
const NotesModel=new nodeModel.NoteModel()
class NoteService {
    async createNoteService(req, res) {
        let newUser = new notes({
            title: req.title,
            description:req.description,
            isArchieved: req.isArchieved,
            isDeleted: req.isDeleted,
            color: req.color,
            userid: req.data.id,
        })
        let saveData=NotesModel.registerModel(newUser);
        return saveData;
    }

async getNoteService(req,res){
    var foundNote  =await NotesModel.findNotes({
      userid:req.data.id
    

     });
  if(foundNote){
      return foundNote;
  }
   }

   async deleteNoteService(req,res){
    var foundNote =await NotesModel.findNotes({userid:req.data.id,isDeleted:true});
      if(foundNote){
          return foundNote;
      }
      }
      async isArchievedService(req,res){
        var foundNote =await NotesModel.findNotes({userid:req.data.id,isDeleted:true});
          if(foundNote){
              return foundNote;
          }
          }
 }
 
 

module.exports=new NoteService();
