import React from 'react';
import ReactDOM, {unmountComponentAtNode} from "react-dom";
import {create} from "domain";
import ProfileStatus from "./ProfileStatus";
// import {create} from "react-test-renderer";



// it('renders without crashing', () =>  {
//     const div = document.createElement('div');
//     ReactDOM.render(<SamuraiTSApp/>, div);
//     ReactDOM.unmountComponentAtNode(div)
// });


// describe('ProfileStatus component',()=> {
//     test('status from props should be in the state', ()=> {
//         const component = create(<ProfileStatus status='it-kamasutra.com'/>)
//         const instance = component.getInstance();
//         expect(instance.state.status).toBe('it-kamasutra.com')
//     })
// })