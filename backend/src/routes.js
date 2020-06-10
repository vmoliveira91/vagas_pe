const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const AgenteController = require('./controllers/AgenteController');
const CaptadorController = require('./controllers/CaptadorController');
const GerenteController = require('./controllers/GerenteController');
const checkAuth = require('./controllers/AuthController');

const routes = express.Router();

// UsuarioController's Routes
// GETs
routes.get('/listar_usuarios/:usuario/:ativo', checkAuth.validateToken ,UsuarioController.listar_usuarios);
// POSTs
routes.post('/cadastrar_usuario', checkAuth.validateToken, UsuarioController.cadastrar_usuario);
routes.post('/atualizar_usuario', checkAuth.validateToken, UsuarioController.atualizar_usuario);
routes.post('/desativar_usuario', checkAuth.validateToken, UsuarioController.desativar_usuario);
routes.post('/logar_usuario',UsuarioController.logar_usuario);

// AgenteController's Routes
// GETs
routes.get('/listar_trabalhadores/:trabalhador/:ativo', checkAuth.validateToken, AgenteController.listar_trabalhadores);
routes.get('/listar_vagas/:vaga/:ativo', checkAuth.validateToken, AgenteController.listar_vagas);
// POSTs
routes.post('/cadastrar_trabalhador', checkAuth.validateToken, AgenteController.cadastrar_trabalhador);
routes.post('/atualizar_trabalhador', checkAuth.validateToken, AgenteController.atualizar_trabalhador);
routes.post('/desativar_trabalhador', checkAuth.validateToken, AgenteController.desativar_trabalhador);
routes.post('/efetuar_inscricao', checkAuth.validateToken, AgenteController.efetuar_inscricao);

// CaptadorController's Routes
// GETs
routes.get('/listar_empregadores/:empregador/:ativo', checkAuth.validateToken, CaptadorController.listar_empregadores)
routes.get('/listar_funcoes/:funcao/:ativo', checkAuth.validateToken, CaptadorController.listar_funcoes)
routes.get('/listar_beneficios/:beneficio/:ativo', checkAuth.validateToken, CaptadorController.listar_beneficios)
// POSTs
routes.post('/cadastrar_empregador', checkAuth.validateToken, CaptadorController.cadastrar_empregador);
routes.post('/atualizar_empregador', checkAuth.validateToken, CaptadorController.atualizar_empregador);
routes.post('/desativar_empregador', checkAuth.validateToken, CaptadorController.desativar_empregador);
routes.post('/cadastrar_funcao', checkAuth.validateToken, CaptadorController.cadastrar_funcao);
routes.post('/atualizar_funcao', checkAuth.validateToken, CaptadorController.atualizar_funcao);
routes.post('/desativar_funcao', checkAuth.validateToken, CaptadorController.desativar_funcao);
routes.post('/cadastrar_vaga', checkAuth.validateToken, CaptadorController.cadastrar_vaga);
routes.post('/atualizar_vaga', checkAuth.validateToken, CaptadorController.atualizar_vaga);
routes.post('/desativar_vaga', checkAuth.validateToken, CaptadorController.desativar_vaga);
routes.post('/cadastrar_beneficio', checkAuth.validateToken, CaptadorController.cadastrar_beneficio);
routes.post('/atualizar_beneficio', checkAuth.validateToken, CaptadorController.atualizar_beneficio);
routes.post('/desativar_beneficio', checkAuth.validateToken, CaptadorController.desativar_beneficio);

// GerenteController's Routes
// GETs
routes.get('/listar_habilidades/:habilidade/:ativo', checkAuth.validateToken,GerenteController.listar_habilidades);
routes.get('/listar_experiencias/:experiencia/:ativo', checkAuth.validateToken, GerenteController.listar_experiencias);
routes.get('/listar_niveis/:nivel/:ativo', checkAuth.validateToken, GerenteController.listar_niveis);
routes.get('/listar_tempos/:tempo/:ativo', checkAuth.validateToken, GerenteController.listar_tempos);
routes.get('/listar_situacoes/:situacao/:ativo', checkAuth.validateToken, GerenteController.listar_situacoes);
routes.get('/listar_inscricoes/:ativo', checkAuth.validateToken, GerenteController.listar_inscricoes);
routes.get('/avaliar_cadastro', checkAuth.validateToken, GerenteController.avaliar_cadastros);
// POSTs
routes.post('/cadastrar_habilidade', checkAuth.validateToken, GerenteController.cadastrar_habilidade);
routes.post('/atualizar_habilidade', checkAuth.validateToken, GerenteController.atualizar_habilidade);
routes.post('/desativar_habilidade', checkAuth.validateToken, GerenteController.desativar_habilidade);
routes.post('/cadastrar_experiencia', checkAuth.validateToken, GerenteController.cadastrar_experiencia);
routes.post('/atualizar_experiencia', checkAuth.validateToken, GerenteController.atualizar_experiencia);
routes.post('/desativar_experiencia', checkAuth.validateToken, GerenteController.desativar_experiencia);
routes.post('/cadastrar_nivel', checkAuth.validateToken, GerenteController.cadastrar_nivel);
routes.post('/atualizar_nivel', checkAuth.validateToken, GerenteController.atualizar_nivel);
routes.post('/desativar_nivel', checkAuth.validateToken, GerenteController.desativar_nivel);
routes.post('/cadastrar_tempo', checkAuth.validateToken, GerenteController.cadastrar_tempo);
routes.post('/atualizar_tempo', checkAuth.validateToken, GerenteController.atualizar_tempo);
routes.post('/desativar_tempo', checkAuth.validateToken, GerenteController.desativar_tempo);
routes.post('/cadastrar_situacao', checkAuth.validateToken, GerenteController.cadastrar_situacao);
routes.post('/atualizar_situacao', checkAuth.validateToken, GerenteController.atualizar_situacao);
routes.post('/desativar_situacao', checkAuth.validateToken, GerenteController.desativar_situacao);
routes.post('/atualizar_inscricao', checkAuth.validateToken, GerenteController.atualizar_inscricao);

module.exports = routes;