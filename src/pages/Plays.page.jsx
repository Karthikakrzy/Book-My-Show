import React from 'react'



//components
import Poster from "../components/Poster/poster.component"
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component'


const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                   <h2 className="text-2xl font-bold mb-4">Plays in Bengaluru</h2> 
                <div className="flex flex-wrap ">
                    <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                    <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                    subtitle="Telugu->₹400"
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12  my-3">
                    <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312471-fxjdfruzje-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil->₹300"
                    />
                    </div>
                     
                    <div className="w-1/2 md:w-1/3 lg:w-3/12  my-3">
                    <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00311042-wmtzbczsdj-portrait.jpg"
                    title="Ellamae Thamash Than"
                    subtitle="Tamil->₹150"
                    />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12  my-3">
                    <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                    title="Admission - 31st July (Saturday)"
                    subtitle="English->₹199"
                    />
                    </div>
                     

                </div>
            
                
                </div>
                 <div className="lg:w-3/12">
                 <h2 className="text-2xl font-bold mb-4">Filters</h2> 
                 <div>
                  <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                  <PlaysFilters title="Language" tags={["Tamil", "Telugu", "English"]}/>
                  <PlaysFilters title="Categories" tags={["Theatre"]}/>
                 </div>
                 </div>
            </div>
            </div>
        </>
    )
}

export default Plays;
