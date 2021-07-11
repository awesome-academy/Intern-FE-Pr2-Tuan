import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounceFn } from '@umijs/hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'reactstrap';
import { searchProduct } from '../../actions';

const Banner = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const { run } = useDebounceFn(() => {
        dispatch(searchProduct(inputValue));
    }, 500);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        run();
    };

    return (
        <section className="banner">
            <Container>
                <div className="banner__title">
                    <h1 className="banner__head__title">{t('home.headtitle')}</h1>
                    <p className="banner__sub__title">{t('home.subtitle')}</p>
                </div>
                <div className="banner__search">
                    <span className="banner__search__lable">{t('home.lable')}</span>
                    <form>
                        <input 
                            className="p-0" 
                            type="text" 
                            placeholder={t('home.placeholder')} 
                            name="keyword"
                            value={inputValue}
                            onChange={handleChange} 
                        />
                    </form>
                    <Button className="btn-search">
                        <FontAwesomeIcon icon={faSearch} />
                        {t('home.search')}
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
