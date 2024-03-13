import styled from 'styled-components'
import './App.css'
import axios from 'axios';
import { BASE_URL } from './Globle';
import { useEffect, useState } from 'react';
import SearchResult from './Components/SearchResults/SearchResult';
import { CiSearch } from "react-icons/ci";


function App() {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState(null);
  const [seletedTab, setSeletedTab] = useState("all");

  const fetchFoodData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data;
      setData(data);
      setFilterData(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilterData(data)
      setSeletedTab(category)
      return
      // seletedTab("all")
    }

    const filtered = data.filter((food) => food.type.toLowerCase().includes(category.toLowerCase()))
    setFilterData(filtered)
    setSeletedTab(category)
  }

  useEffect(() => {
    fetchFoodData()
  }, [])

  if (Loading) {
    return <>Loading</>
  }

  const searchFood = (e) => {
    let value = e.target.value;
    if (!value) {
      setFilterData(data)
    }
    else {
      const filtered = data.filter((food) => food.name.toLowerCase().includes(value.toLowerCase()))
      setFilterData(filtered)
    }

  }

  return (
    <>
      <MainContainer>
        <TopCon>
          <div><img src="./logo.png" alt="" /></div>
          <div className='secondChild'><CiSearch /><input onChange={searchFood} type="text" placeholder='search' /></div>
        </TopCon>
        <FilterCon>
          <button onClick={() => filterByCategory("all")}>All</button>
          <button onClick={() => filterByCategory("breakfast")}>BreakFast</button>
          <button onClick={() => filterByCategory("lunch")}>Lunch</button>
          <button onClick={() => filterByCategory("dinner")}>Dinner</button>
        </FilterCon>
        <SearchResult data={filterData} />
      </MainContainer>
    </>
  )
}

export default App

const MainContainer = styled.div`
background: linear-gradient(rgb(0, 0, 0,.5),rgb(0, 0, 0,.5)),url(./bg.jpg) center;
min-height: 159vh;
background-size: cover;
`
const TopCon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: .5rem 3rem;
background: rgba(255, 255, 255, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3);
@media (max-width: 500px) {
  padding: .5rem 1rem;
}


.secondChild{
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;
  background-color: #ffffff;
  padding: .5rem;
  border-radius: 3px;
  input{
    outline: none;
    border: none;
}
@media (max-width: 500px) {
  padding: .39rem;
}
}
div{
  cursor: pointer;
  img{
    width: 7rem;
  }
  @media (max-width: 500px) {
    img{
      width: 4.5rem;
    }
}
}
`
const FilterCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:5rem  2rem 2rem 2rem;
gap: .7rem;
flex-wrap: wrap;
@media (max-width: 500px) {
  margin:2rem  1rem 1rem 1rem;
}
button{
  padding: .6rem 2rem;
  border: none;
  border-radius: 7px;
  font-weight: 500;
  letter-spacing: .02rem;
  background-color: #ff0000e2 ;
  color: #ffffff;
  cursor: pointer;
  transition: 200ms all;
  &:hover{
    background-color: #ff0000;
  }
}`

