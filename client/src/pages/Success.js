import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { idbPromise } from '../utils/helpers';
import { ADD_ORDER } from '../utils/mutations';
import Jumbotron from '../components/Jumbotron';

