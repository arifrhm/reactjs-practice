import React from "react";

export default class FormElement extends React.Component{
state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false
}

handleSubmit = (a) => {
    a.preventDefault();
    alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'Succes' : 'Failed'}
    `)

    this.setState({
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    })
}

    render(){
        return(
            <div style={{margin: '100px auto', border: '1px solid green', padding: '20px'}}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama: <input 
                        type="text" 
                        name="nama" 
                        onChange={a => this.setState({nama: a.target.value})}
                        defaultValue = {this.state.nama}
                        />
                    </label>
                    <br />
                    <label>
                        Jurusan: <select 
                        name="jurusan"
                        onChange={a => this.setState({jurusan: a.target.value})}
                        // defaultChecked = {this.props.jurusan}
                        >
                            <option value="Pilih Jurusan">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Design Komunikasi Visual">DKV</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Jenis Kelamin: 
                        <input type="radio" value="Laki-laki" name="gender"
                        onChange={a => this.setState({gender: a.target.value})}
                        // defaultChecked = {this.props.gender}
                        />
                        Laki-Laki
                        <input type="radio" value="Perempuan" name="gender"
                        onChange={a => this.setState({gender: a.target.value})}
                        // defaultChecked = {this.props.gender}
                        />
                        Perempuan
                    </label>
                    <br />
                    <label>
                        Alamat: <textarea cols="30" rows="10" name="alamat"
                        onChange={a => this.setState({alamat: a.target.value})}
                        defaultValue = {this.state.alamat}
                        >
                        </textarea>
                    </label>
                    <br />
                    <label>
                        Member: <input type="checkbox" name="member" checked={this.state.member}
                        onChange={a => this.setState({member: a.target.checked})}
                        // defaultChecked = {this.props.member}
                        />
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}