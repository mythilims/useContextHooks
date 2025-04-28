import React, { useContext } from "react";
import { Card, CardBody, CardImg, CardTitle, Button } from "reactstrap";
import { UserAuthDetails } from '../Context/AuthCon';
import '../css/common.css'

function BooksList() {
    let { selectedBook, setSelectedBook, bookList, setBookList } = useContext(UserAuthDetails);

    const likeUpdate = (type, idx) => {
        setBookList({ type: type, idx });
    };

    return (
        <div className={`bgImage d-flex flex-wrap gap-3 ${selectedBook ? 'justify-content-center' : 'justify-content-center'} p-4`}>
            {selectedBook ? (
                <Card style={{ width: '30rem' }} className="shadow">
                    <CardImg top width="100%" height="300px" src={selectedBook.image} alt={selectedBook.title} />
                    <CardBody>
                        <CardTitle tag="h4">{selectedBook.title}</CardTitle>
                        <p className="text-danger" style={{ fontSize: '16px' }}>
                            Author: {selectedBook.author}
                        </p>
                        <p className="mt-3">{selectedBook.des}</p>
                        <div className="d-flex gap-2 mt-4">
                            <Button color="primary" href={selectedBook.website} target="_blank" className="w-50">
                                View Website
                            </Button>
                            <Button color="dark" onClick={() => setSelectedBook(null)} className="w-50">
                                Back to List
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            ) : (
                bookList.map((item, idx) => (
                    <Card key={idx} style={{ width: '18rem' }} className="shadow-sm">
                        <CardImg top width="100%" height="250px" src={item.image} alt={item.title} />
                        <CardBody>
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <p className="text-danger" style={{ fontSize: '14px' }}>
                                Author: {item.author}
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <div onClick={() => likeUpdate(item.like ? 'unlike' : 'like', idx)}>
                                    <i className={item.like ? 'mt-2 fas fa-heart text-danger' : 'mt-2 far fa-heart'} />
                                </div>
                                <Button color="primary" className="w-50 justify-content-center" onClick={() => setSelectedBook(item)}>
                                    Click & Read
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                ))
            )}
        </div>
    );
}

export default BooksList;
