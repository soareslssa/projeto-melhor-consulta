package com.soaresdev.melhorconsultaspring.dominio;

public enum DominioSituacaoConsulta {

    LIVRE("L", "Livre"),
    AGENDADA("A", "Agendada"),
    CANCELADA("C","Cancelada");

    private String codigo;
    private String descricao;

    public String getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    DominioSituacaoConsulta(String codigo, String descricao) {
        this.codigo = codigo;
        this.descricao = descricao;
    }
}
