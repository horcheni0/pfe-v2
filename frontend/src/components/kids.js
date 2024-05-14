


import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import VerticalCard from '../components/VerticalCard';
import './women.css';

const KidsComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(SummaryApi.filterProduct.url, {
                method: SummaryApi.filterProduct.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    category: ["kids"]
                })
            });

            const dataResponse = await response.json();
            setData(dataResponse?.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSortBy = (e) => {
        const { value } = e.target;
        setSortBy(value);
        if (value === 'asc') {
            setData(prevData => [...prevData].sort((a, b) => a.sellingPrice - b.sellingPrice));
        } else if (value === 'desc') {
            setData(prevData => [...prevData].sort((a, b) => b.sellingPrice - a.sellingPrice));
        }
    };

    return (
      <div className='container'>
          <div className='grid-container'>
              <div className='sort-container'>
                  <h3>Sort by</h3>
                  <form>
                      <div>
                          <input type='radio' name='sortBy' checked={sortBy === 'asc'} onChange={handleSortBy} value="asc" />
                          <label>Price - Low to High</label>
                      </div>
                      <div>
                          <input type='radio' name='sortBy' checked={sortBy === 'desc'} onChange={handleSortBy} value="desc" />
                          <label>Price - High to Low</label>
                      </div>
                  </form>
              </div>
              <div className='product-container'>
                  {
                      data.length !== 0 ? (
                          <VerticalCard data={data} loading={loading} />
                      ) : (
                          <p>No products found.</p>
                      )
                  }
              </div>
          </div>
      </div>
  );
};
export default KidsComponent;

