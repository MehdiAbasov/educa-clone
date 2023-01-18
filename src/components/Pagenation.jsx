import React from 'react'

const Pagenation = () => {
    return (
        <div className='pagenation-container'>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-between">
                    <div className="page-itm-list">
                        <span class="page-itm"><a class="page-link" href="#">1</a></span>
                        <span class="page-itm "><a class="page-link active-itm-pagenation" href="#">2</a></span>
                        <span class="page-itm"><a class="page-link" href="#">3</a></span>
                    </div>
                    <span class="page-itm-list">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </span>
                </ul>
            </nav>
        </div>
    )
}

export default Pagenation