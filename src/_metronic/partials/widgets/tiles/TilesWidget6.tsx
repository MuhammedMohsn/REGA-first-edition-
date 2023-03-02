import React, { Fragment, useEffect, useState } from 'react'
import img1 from '../assets/topic2.jpg'
import img2 from '../assets/image.jpg'
import img3 from '../assets/topic.jpg'


function TilesWidget6() {
    let x: Array<{ id: number, title: string, img: any }> = [{ id: 1, title: 'blaaaa', img: img1 }, { id: 2, title: 'blaaaa blaaaa', img: img2 }, { id: 3, title: 'blaaaa blaaaa blaaaaaaaaaa', img: img3 }]
    const [index, setIndex] = useState<number>(1);
    let [selectedImage, setSelectedImage] = useState<any>({})
    const handleSelect = (e: any, selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        if (index) {
            setSelectedImage(x.find((v, i) => { return v.id == index }))

        }}, [index])
    return (
        <Fragment>
            <div className="row gx-5 gx-xl-8 mb-5 mb-xl-8">
                <div className="col-xl-12">
                    <div className="card card-xxl-stretch-50">
                        <div className="card-body pt-5">
                            <div id="kt_security_guidelines" className="carousel slide carousel-custom carousel-stretch slide myCarousel" data-bs-ride="carousel" data-bs-interval="1000">
                                <div className="d-flex flex-stack align-items-center flex-wrap">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bolder fs-3 mb-1">احدث الاخبار</span><br />
                                        <span className="text-muted fw-bold fs-7"> عرض احدث اخبار الهيئة </span>
                                    </h3>
                                    <ol className="p-0 m-0 carousel-indicators carousel-indicators-dots">
                                        {/* <li data-bs-target="#kt_security_guidelines" data-bs-slide-to="0" className="ms-1 active" aria-current="true"></li>
                                        <li data-bs-target="#kt_security_guidelines" data-bs-slide-to="1" className="ms-1"></li>
                                        <li data-bs-target="#kt_security_guidelines" data-bs-slide-to="2" className="ms-1"></li> */}
                                        {x.map((v, i) =>
                                            <li key={v.id} data-bs-target={v.id} data-bs-slide-to={v.id} className={index == v.id ? `ms-1 active` : `ms-1`} onClick={(e) => { handleSelect(e, v.id) }} ></li>)}
                                    </ol>
                                </div>
                                <div className="row gx-5 gx-xl-8 ps-0">
                                    <ul className="list-group col-sm-4 p-0" style={{ borderRadius: "0 10px 10px 0" }}>
                                        {/* هنا شيلت ال classes ديه carousel-item-prev carousel-item-start */}
                                        {x.map((v, i) => <> <li key={v.id} data-bs-target={v.id} data-bs-slide-to={v.id} className={index == v.id ? `list-group-item active ` : `list-group-item`} onClick={(e) => { handleSelect(e, v.id) }}><h4>سمو الرئيس التنفيذي المكلّف للهيئة العامة للعقار </h4></li></>)}
                                        {/* <li data-bs-target="#kt_security_guidelines" data-bs-slide-to="1" className="list-group-item"><h4>سمو الرئيس التنفيذي المكلّف للهيئة العامة للعقار</h4></li>
                                        <li data-bs-target="#kt_security_guidelines" data-bs-slide-to="2" className="list-group-item"><h4>سمو الرئيس التنفيذي المكلّف للهيئة العامة للعقار</h4></li>
                                        <li data-bs-target="#kt_security_guidelines" data-bs-slide-to="3" className="list-group-item"><h4>سمو الرئيس التنفيذي المكلّف للهيئة العامة للعقار</h4></li>
                                   */}
                                    </ul>
                                    <div className="col-sm-8 ps-0 ">
                                        <div className="carousel-inner ">
                                            <div className="carousel-item d-block">
                                                <div className="carousel-wrapper">
                                                    <img src={selectedImage.img} />
                                                    <div className="carousel-caption">
                                                        <a href="#">عنوان الخبر</a>
                                                        <p>تفاصيل الخبر سمو الرئيس التنفيذي المكلّف للهيئة العامة للعقار</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default TilesWidget6