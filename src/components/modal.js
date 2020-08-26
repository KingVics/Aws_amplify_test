import React from 'react'


function Modal() {

    return(
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                 <div className="modal-content">
                     <div className="modal-header">
                         <h5 className="modal-title" id="exampleModalLabel">Hello</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        Testing Project for AWS Deployment
                        </div>

                        <div className="modal-footer">
                         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                 </div>
            </div>  
        </div>
    )
}


export default Modal;