import React from 'react'
import './descriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (169)
            </div>  
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aliquam ducimus et incidunt quibusdam eaque alias blanditiis qui 
                 repellendus hic quae, Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  dolorem assumenda, explicabo quae, quis corporis voluptas omnis aspernatur 
                  amet quasi quos placeat consectetur error suscipit totam ab nihil inventore.
                 inventore ratione totam! Quasi pariatur unde expedita quibusdam, 
                accusamus?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                     dolore earum quo consequuntur. Libero fugiat illum commodi. Tempora quibusdam 
                    iusto perferendis quae, reiciendis totam eos quidem asperiores rerum iure? Qui.</p>
        </div>
    </div>
  )
}


export default DescriptionBox