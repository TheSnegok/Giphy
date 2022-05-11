import s from "./HeaderText.module.css";
import { setFound, toggleLanguage } from "../../redux/reducers/gifReducer";
import { connect } from "react-redux";

interface PropHeaderText {
    toggleLanguage: (lang: string) => void,
    setFound: (c: undefined) => void,
    lang: string,
}

const HeaderText = ({ toggleLanguage, setFound, lang }: PropHeaderText) => {
    return (
        <div className={s.App_headerText}>
            <div className={s.giphyText}>
                <header className={s.header}>
                    <h1>Giphy</h1>
                </header>
                <div className={s.home} onClick={() => setFound(undefined)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="59.465px" height="59.465px" viewBox="0 0 59.465 59.465">
                        <g>
                            <g>
                                <path d="M58.862,33.886L45.045,20.069v-9.112c0-1.136-0.921-2.056-2.056-2.056c-1.137,0-2.057,0.92-2.057,2.056v5.001L31.185,6.21
			c-0.801-0.803-2.104-0.803-2.905,0L0.603,33.886c-0.803,0.804-0.803,2.104,0,2.907c0.802,0.803,2.104,0.803,2.907,0L29.732,10.57
			l26.223,26.223c0.401,0.398,0.93,0.604,1.455,0.604c0.522,0,1.051-0.201,1.452-0.604C59.665,35.988,59.665,34.689,58.862,33.886z"
                                />
                                <path d="M52.979,36.245L31.185,14.449c-0.385-0.385-0.908-0.602-1.454-0.602c-0.545,0-1.068,0.217-1.453,0.602L6.484,36.245
			c-0.291,0.288-0.487,0.659-0.565,1.062c-0.061,0.314-0.091,0.633-0.091,0.942v10.638c0,2.739,2.229,4.971,4.969,4.971h10.638
			c1.378,0,2.707-0.582,3.645-1.599c0.854-0.923,1.324-2.12,1.324-3.373v-7.812c0-1.896,1.453-3.48,3.33-3.658
			c1.878,0.178,3.331,1.762,3.331,3.658v7.812c0,1.252,0.472,2.45,1.324,3.373c0.938,1.017,2.269,1.599,3.646,1.599h10.638
			c2.74,0,4.971-2.229,4.971-4.972V38.252c0-0.312-0.031-0.63-0.092-0.941C53.471,36.904,53.271,36.533,52.979,36.245z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={s.toggle_language} onClick={() => toggleLanguage(lang)}>
                    <span>{lang === 'en' ? 'ru' : 'en'}</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    lang: state.gifs.language,
});

export default connect(mapStateToProps, { toggleLanguage, setFound })(HeaderText);