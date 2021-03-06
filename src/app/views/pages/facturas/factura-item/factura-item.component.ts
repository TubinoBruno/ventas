import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;

declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-factura-item',
  templateUrl: './factura-item.component.html',
  styleUrls: ['./factura-item.component.scss']
})
export class FacturaItemComponent implements OnInit {
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

  }
  initTable1() {
		this.service.getItemDeFactura().subscribe(res => {
			this.KTDatatableModal1 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-detalle-factura');
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
                field: '',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {class: 'kt-checkbox--solid'},
                textAlign: 'center',
              }, {
                field: 'cod_item',
                title: 'Item',
                autoHide: false,
                width: 60,
                // callback function support for column rendering
                
              }, {
                field: 'descripcion',
                title: 'Descripci??n',
              }, {
                field: 'cantidad',
                title: 'Cantidad',
                width: 70,
              }, {
                field: 'precio_unitario',
                title: 'Precio Unit.',
                template: function(row) {
                  var precio = row.precio_unitario;
                  return 'Bs.'+precio;
                          },
              }, {
                field: 'moneda',
                title: 'Moneda',
              }, {
                field: 'subtotal',
                title: 'Subtotal',
                width: 70,
                autoHide: false,
                template: function(row) {
                  var subtotal = row.subtotal;
                  return 'Bs.'+subtotal;
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
	$('#factura-datos').on('click', 'a.factura-dato', function () {
		g_router.navigate(['/admin/facturas/factura-detalle']);
	});
}
function initEvents1() {
	$('#factura-datos').on('click', 'a.factura-pago', function () {
		g_router.navigate(['/admin/facturas/factura-pago']);
	});
}