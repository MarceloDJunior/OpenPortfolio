import React from 'react';
import {Form, Control, Errors, actions} from 'react-redux-form';
import FormInput from './../components/FormInput';
import {required} from './../util/validators';

const ProfileEditForm = (props) => {

    const errorsWrapper = ({children}) => {
        return <div className="error"><span>{children && children.length > 1
            ? children[0]
            : children
        }</span></div>;
    };

    return (
        <div className="col-xs-12 col-md-8">
            <div className="edit-profile">
                <h2>Editar informações pessoais</h2>
                <Form model="editProfileForm"
                      onSubmitFailed={this.handleSubmitError}
                      onSubmit={(val) => this.handleSubmit(val)}
                      validators={{
                          nome: {required},
                          sobrenome: {required},
                          fone: {required}
                      }}
                      validateOn="submit"
                >
                    <div className="form-group">
                        <div className="grid_2">
                            <Control.text
                                model="editProfileForm.nome"
                                component={FormInput}
                                className="form-control"
                                mapProps={{
                                    invalid: ({fieldValue}) => !fieldValue.valid
                                    && fieldValue.touched,
                                    label: "Nome"
                                }}
                            />
                            <Errors
                                wrapper={this.errorsWrapper}
                                model="editProfileForm.nome"
                                messages={{
                                    required: "Informe o seu nome",
                                }}
                                show="touched"
                            />
                        </div>
                        <div className="grid_2">
                            <Control.text
                                model="editProfileForm.sobrenome"
                                component={FormInput}
                                className="form-control"
                                mapProps={{
                                    invalid: ({fieldValue}) => !fieldValue.valid
                                    && fieldValue.touched,
                                    label: "Sobrenome"
                                }}
                            />
                            <Errors
                                wrapper={this.errorsWrapper}
                                model="editProfileForm.sobrenome"
                                messages={{
                                    required: "Informe o seu sobrenome",
                                }}
                                show="touched"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" readOnly={true} className="form-control" value={props.user.email}/>
                    </div>
                    <div className="form-group">
                        <Control.text
                            model="editProfileForm.fone"
                            component={FormInput}
                            className="form-control"
                            mapProps={{
                                invalid: ({fieldValue}) => !fieldValue.valid
                                && fieldValue.touched,
                                label: "Celular"
                            }}
                        />
                        <Errors
                            wrapper={this.errorsWrapper}
                            model="editProfileForm.fone"
                            messages={{
                                required: "Informe o número do seu celular",
                            }}
                            show="touched"
                        />
                    </div>
                    <div className="form-group">
                        <Control.text
                            model="editProfileForm.localTrabalho"
                            component={FormInput}
                            className="form-control"
                            mapProps={{
                                invalid: ({fieldValue}) => !fieldValue.valid
                                && fieldValue.touched,
                                label: "Local de trabalho"
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <Control.text
                            model="editProfileForm.localEstudo"
                            component={FormInput}
                            className="form-control"
                            mapProps={{
                                invalid: ({fieldValue}) => !fieldValue.valid
                                && fieldValue.touched,
                                label: "Intituições onde estudou"
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sobre você</label>
                        <Control.textarea
                            model="editProfileForm.obs"
                            className="form-control"
                            mapProps={{
                                invalid: ({fieldValue}) => !fieldValue.valid
                                && fieldValue.touched
                            }}
                            rows="6"
                        />
                    </div>
                </Form>
            </div>
        </div>
    )

};

export default ProfileEditForm;