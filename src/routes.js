const {addNoteHandler,deleteNoteByIdHandler,editNoteHandler,getAllNotesHandler,getNotesById}=require('./handler')
const routes=[
  {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
  },{
    method:'GET',
    path:'/notes',
    handler:getAllNotesHandler,
  },{
    method:'GET',
    path:'/notes/{id}',
    handler:getNotesById,
  },{
    method:'PUT',
    path:'/notes/{id}',
    handler:editNoteHandler,
  },{
    method:'DELETE',
    path:'/notes/{id}',
    handler:deleteNoteByIdHandler,
  }
];

module.exports=routes