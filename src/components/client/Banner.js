import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Banner = () => {
    const { t } = useTranslation();

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
                        <input className="p-0" type="text" placeholder={t('home.placeholder')} name="keyword" />
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
