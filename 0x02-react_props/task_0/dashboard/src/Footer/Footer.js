import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils'

<div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
</div>
