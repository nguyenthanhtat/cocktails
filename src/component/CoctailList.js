import React, { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {fetchCocktail} from '../redux/action'
import {Link } from 'react-router-dom'
import { isElementOfType } from 'react-dom/cjs/react-dom-test-utils.production.min';
const CoctailList = () => {
    const {coctails,loading} =useSelector((state)=>({...state.data}))
    const [modifiedCocktail,setModifiedCocktail] = useState([])
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCocktail())
    },[])
    useEffect(()=>{
        if(coctails){
            const newCocktail =coctails.map((item)=>{
                const {
                    idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass
                }= item;
                return{
                    id:idDrink,
                    name:strDrink,
                    image:strDrinkThumb,
                    info:strAlcoholic,
                    glass:strGlass
                }
            });
            setModifiedCocktail(newCocktail);
        }else{
            setModifiedCocktail([]);
        }
    },[coctails])
    if(loading){
        return (
            <div className="spinner-grow" role='status'>
                <span className='visually-hidden'>Loading...</span>

            </div>
        )
    }
    if(!coctails){
        return <h2>No coctails match your search criteria</h2>
    }
  return (
    <div className='container'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
            {modifiedCocktail.map((item)=>{
                const {id,name,image,glass,info}=item
                return (
                    <div className='col' key = {id}>
                        <div className='card h-2'>

                            <img src={image} alt={name} className='card-img-top'/>
                            <div className='card-body' style={{textAlign: 'left'}}>
                                <h5 className='card-title'>{name}</h5>
                                <h4 className='card-title'>{glass}</h4>
                                <p className='card-text'>{info} </p>
                                <Link to={`/coctails/${id}`}>
                                    <button className='btn btn-info'> details</button>
                                </Link>
                            </div> 
                        </div>
                    </div>

                )
            })}
        </div>
    </div>
  ) 
};

export default CoctailList;
