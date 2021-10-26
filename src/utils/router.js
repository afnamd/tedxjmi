import React,{ useState,useEffect,Suspense, useRef } from 'react'
import {Route, Switch, useLocation} from 'react-router-dom';
import NotFoundScreen from '../screens/404.screen';

const Router = ({data,urlRouting=true, activeIndex, animate, props, className}) => {
    let location = useLocation()
    const [flag, setFlag] = useState(false)
    const containerRef = useRef(null)
    let animationFlag = false
    if(!window[JSON.stringify(data)])
        window[JSON.stringify(data)] = {lastLocationId: 0, currentLocationId: 0}
    useEffect(()=>{
        setFlag(false)
        window.f=JSON.stringify(data)
        if(animate && containerRef.current && animationFlag){
            let lastLocationId = window[JSON.stringify(data)]?.lastLocationId
            let currentLocationId = window[JSON.stringify(data)]?.currentLocationId
            if(lastLocationId > currentLocationId && window.rerenderFlat !==currentLocationId){
                containerRef.current.classList.remove('animate__slideInRight')
                containerRef.current.classList.add('animate__slideInLeft')
                setTimeout(()=>{
                    containerRef.current?.classList.remove('animate__slideInLeft')//added `?` -> when component unmont before 200ms an error will occurred
                },200)
            }
            else if(window.rerenderFlat !==currentLocationId){
                containerRef.current.classList.remove('animate__slideInLeft')
                containerRef.current.classList.add('animate__slideInRight')
                setTimeout(()=>{
                    containerRef.current?.classList.remove('animate__slideInRight')
                },200)
            }
            window.rerenderFlat = currentLocationId
        }
        setFlag(true)

    },[location, animate, data, flag, containerRef])
    let currentScreen=data[activeIndex]
    return flag?!urlRouting?
    <div ref={containerRef} className={`z-0 ${className}`} style={{animationDuration: '150ms'}}>
        {
            animationFlag = currentScreen.animate === false?false:true
        }
        {
            window[JSON.stringify(data)].currentLocationId !== activeIndex?
            window[JSON.stringify(data)].lastLocationId = window[JSON.stringify(data)].currentLocationId:
            null
        }
        {
            (()=>{
                window[JSON.stringify(data)].currentLocationId = activeIndex
            })()
        }
        <currentScreen.screen  {...props} />
    </div>:(
        <>

        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                {
                data.map((route, index) => (
                        <Route
                            exact={route.exact === undefined ? true : route.exact}
                            path={route.path}
                            component={(RouterProps) => 
                            <div ref={containerRef} className={`z-0 ${className}`}  style={{animationDuration: '150ms'}}>
                                {
                                    animationFlag = route.animate === false?false:true
                                }
                                {
                                    window[JSON.stringify(data)].currentLocationId !== index?
                                    window[JSON.stringify(data)].lastLocationId = window[JSON.stringify(data)].currentLocationId:
                                    null
                                }
                                {
                                    (()=>{
                                        window[JSON.stringify(data)].currentLocationId = index
                                    })()
                                }
                                <route.screen  {...props} routerProps={RouterProps} />
                                </div>
                                }
                            key={index.toString()}
                        />
                ))
                }
                <Route component={NotFoundScreen} />
            </Switch>
        </Suspense>
        </>

    ):null
}
export default Router