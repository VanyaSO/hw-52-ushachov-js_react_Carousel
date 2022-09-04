import React from 'react';

// const [indexSlide, setIndexSlide] = useState(1);

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            indexSlide: 1
        }
    }


    nextSlide = () => {
        if(this.state.indexSlide !== this.props.children.length){
            this.setState({indexSlide: ++this.state.indexSlide})
        }else if (this.state.indexSlide === this.props.children.length){
            this.setState({indexSlide: 1})
        }
    }

    prevSlide = () => {
        if(this.state.indexSlide !== 1){
            this.setState({indexSlide: --this.state.indexSlide})
        }else if (this.state.indexSlide === 1){
            this.setState({indexSlide: this.props.children.length})
        }
    }

    render(){
        return(
            <div className="container d-flex mt-5">
                <button className="slidePrev btn btn-outline-primary" onClick={this.prevSlide}>prev</button>
                <div className="carousel slide">
                    <div className="carousel-inner">
                        {this.props.children.map((item,index) => (
                            <div className={`animate__animated carousel-item animate__fadeIn ${this.state.indexSlide === index + 1 ? " active" : ""} `}>{item}</div>
                        ))}
                    </div>
                </div>
                <button className="slideNex btn btn-outline-primary" onClick={this.nextSlide}>next</button>
            </div>
        );
    }
}

export default Carousel;












// function Carousel ({children}) {
//
//     const [indexSlide, setIndexSlide] = useState(1);
//
//
//     const nextSlide = () => {
//         if(indexSlide !== children.length){
//             setIndexSlide(indexSlide + 1);
//         }else if (indexSlide === children.length){
//             setIndexSlide(1)
//         }
//     }
//
//     const prevSlide = () => {
//         if(indexSlide !== 1){
//             setIndexSlide(indexSlide - 1);
//         }else if (indexSlide === 1){
//             setIndexSlide(children.length)
//         }
//     }
//
//     // render(){
//     return(
//         <div className="container d-flex mt-5">
//             <button className="slidePrev btn btn-outline-primary" onClick={prevSlide}>prev</button>
//             <div className="carousel slide">
//                 <div className="carousel-inner">
//                     {children.map((item,index) => (
//                         <div className={`animate__animated carousel-item animate__fadeIn ${indexSlide === index + 1 ? " active" : ""} `}>{item}</div>
//                     ))}
//                 </div>
//             </div>
//             <button className="slideNex btn btn-outline-primary" onClick={nextSlide}>next</button>
//         </div>
//     );
//     // }
// }
