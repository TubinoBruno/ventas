import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-producto-historial-precio',
  templateUrl: './producto-historial-precio.component.html',
  styleUrls: ['./producto-historial-precio.component.scss']
})
export class ProductoHistorialPrecioComponent implements OnInit {
  KTDatatableModal1: any;

  KTBootstrapSelect: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;
  }
  ngOnInit() {
    this.initTable1();
    this.KTBootstrapSelect = function () {

      // Private functions
      var demos = function () {
        // minimum setup
        $('.kt-selectpicker').selectpicker();
      }

      return {
        // public functions
        init: function () {
          demos();
        }
      };
    }();
    this.KTBootstrapSelect.init();
    initEvents();
    initEvents1();
    clickEvents();
  }
  initTable1() {
    this.service.getPrecios().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-historial-precios');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',		//remote if real url is provided
              source: {
                data: res['data']
              },
              pageSize: 10,
              //serverPaging: true,
              //serverFiltering: false,
              //serverSorting: true,
            },

            // layout definition
            layout: {
              theme: 'default',
              scroll: false,
              height: null,
              footer: false,
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
              input: $('#generalSearch1')
            },

            // columns definition
            columns: [
              {
                field: 'necesidad',
                title: 'Necesidad',
                autoHide: false,
                width: 70,
                
              }, {
                field: 'moneda',
                title: 'Moneda',
                width: 90,
              },{
                field: 'valor',
                title: 'Valor',
                width: 70,
              
              }, {
                field: 'costo',
                title: 'Costo',
              
              }, {
                field: 'restriccion',
                title: 'D??as restricci??n',
              }, {
                field: 'valor_restriccion',
                title: 'Valor restricci??n',
              }, {
                field: 'valor_comision',
                title: 'Valor comisi??n',
              }, {
                field: 'valor_finan',
                title: 'Valor financiero',
              }, {
                field: 'fecha_desde',
                title: 'Fecha desde',
              }, {
                field: 'fecha_hasta',
                title: 'Fecha hasta',
              }, {
                field: 'tipo_lista',
                title: 'Tipo lista',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Inactivo') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Activo') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Por aprobar') {
                    status = 'kt-badge--warning';
                  } else {
                    return ' ';
                  }
                  return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
                },
              }],
          });

        };
        return {
          // public functions
          init: function () {

            subRemoteTablaFuncionarios();

          }
        };
      }();
      this.KTDatatableModal1.init();
    });
  }

}
function initEvents() {
	$('#product-link').on('click', 'a.precio-nuevo', function () {
		g_router.navigate(['/admin/product/product-precio-nuevo']);
	});
}
function initEvents1() {
	$('#product-link').on('click', 'a.product-detalle', function () {
		g_router.navigate(['/admin/product/product-detalle']);
	});
}
function clickEvents() {
	$('#tabla-historial-precios').on( 'click', 'tr.kt-datatable__row', function (e) {
		//$('#fecha_ausen').val( datatable.getRecord(this).getColumn('fecha').getValue() );
		var data = $(e.currentTarget).data('obj');
		//console.log(data); // pass it into your inputs
		$('#valor').val( data.valor);
		$('#costo').val( data.costo);
		$('#dias_restriccion').val( data.restriccion );
		$('#valor_restriccion').val( data.valor_restric );
		$('#valor_comisionable').val( data.valor_comision );
		$('#valor_financiero').val( data.valor_finan );
		$('#fecha_ini').val( data.fecha_desde );
		$('#fecha_fin').val( data.fecha_hasta );
	});
}