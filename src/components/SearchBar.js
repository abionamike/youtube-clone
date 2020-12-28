import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useMainStyles } from './styles/MainSearchBar';
import { useMiniStyles } from './styles/MiniSearchBar';

const SearchBar = ({ setSearchInput, type }) => {
    const mainClasses = useMainStyles();
    const miniClasses = useMiniStyles();
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput(input);
        setInput('');
    }
    return (
      <>
      {type === 'main' ? 
        <form className={mainClasses.search} onSubmit={handleSubmit}>
          <InputBase value={input} placeholder="Search" classes={{ root: mainClasses.inputRoot, input: mainClasses.inputInput, }} inputProps={{ 'aria-label': 'search' }} onChange={e => setInput(e.target.value)} />
          <div className={mainClasses.searchIcon}>
            <SearchIcon />
          </div>
        </form> :
        <form className={miniClasses.search} onSubmit={handleSubmit}>
          <InputBase value={input} placeholder="Search" classes={{ root: miniClasses.inputRoot, input: miniClasses.inputInput, }} inputProps={{ 'aria-label': 'search' }} onChange={e => setInput(e.target.value)} />
          <div className={miniClasses.searchIcon}>
            <SearchIcon />
          </div>
        </form> 
      }
      </>
    )
}

export default SearchBar;
