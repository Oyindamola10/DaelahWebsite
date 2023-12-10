import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const SearchPage = () => {
    const [searchedItems, setSearchedItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://special-goggles-qrwrwvw6rq34vxj-8088.app.github.dev/api/product/${id}`);

            setSearchedItem(response.data.postData);
        }

        getData();
    }, [id])


    return (
        <div>
            {
                searchedItems?.length ? (
                    <div>
                        {searchedItems.map(item => (
                            <div style={{ color: 'white', background: 'black' }}>
                                <img src={item.image} />
                                
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ background: 'black', color: 'white' }}>
                        No search Results
                    </div>
                )
            }
        </div>
    )
}

export default SearchPage;
